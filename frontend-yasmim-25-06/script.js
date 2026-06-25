const BASE_URL = "https://house-of-dragons-pi.vercel.app";
const STUDENT_EMAIL = "yasmim.schacherslehner@rede.ulbra.br";

const modal = document.querySelector("#subscription-modal");
const form = document.querySelector("#subscription-form");
const closeButton = document.querySelector(".modal-close");
const emailInput = document.querySelector("#subscriber-email");
const modalPlanName = document.querySelector("#modal-plan-name");
const formMessage = document.querySelector("#form-message");
const pageMessage = document.querySelector("#page-message");
const submitButton = form.querySelector(".submit-button");

let selectedPlan = null;

document.querySelectorAll("[data-plan]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedPlan = {
      code: button.dataset.plan,
      label: button.dataset.planLabel,
    };

    modalPlanName.textContent = selectedPlan.label;
    clearMessages();
    form.reset();
    openModal();
  });
});

closeButton.addEventListener("click", closeModal);

modal.addEventListener("cancel", () => {
  clearMessages();
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!selectedPlan) {
    showMessage(formMessage, "Escolha um plano antes de confirmar.", "error");
    return;
  }

  const subscriberEmail = emailInput.value.trim();

  setLoading(true);
  clearMessages();

  try {
    const token = await getToken();
    await registerPlan(token, subscriberEmail, selectedPlan.code);

    const successText = `Obrigado por assinar! ${selectedPlan.label} registrado para ${subscriberEmail}.`;
    showMessage(formMessage, successText, "success");
    showMessage(pageMessage, successText, "success");
    form.reset();
  } catch (error) {
    const message = error.message || "Não foi possível registrar o plano.";
    showMessage(formMessage, message, "error");
    showMessage(pageMessage, message, "error");
  } finally {
    setLoading(false);
  }
});

function openModal() {
  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "");
  }

  emailInput.focus();
}

function closeModal() {
  if (typeof modal.close === "function") {
    modal.close();
  } else {
    modal.removeAttribute("open");
  }

  clearMessages(formMessage);
}

async function getToken() {
  const response = await fetch(`${BASE_URL}/api/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: STUDENT_EMAIL }),
  });

  const data = await parseResponse(response);

  if (!data.token) {
    throw new Error("A API não retornou o token de acesso.");
  }

  return data.token;
}

async function registerPlan(token, email, plan) {
  const response = await fetch(`${BASE_URL}/api/plan`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ email, plan }),
  });

  return parseResponse(response);
}

async function parseResponse(response) {
  const text = await response.text();
  let data = {};

  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { message: text };
  }

  if (!response.ok) {
    throw new Error(data.message || "A API retornou um erro na solicitação.");
  }

  return data;
}

function setLoading(isLoading) {
  submitButton.disabled = isLoading;
  submitButton.textContent = isLoading ? "Enviando..." : "Confirmar assinatura";
}

function showMessage(element, message, type) {
  element.textContent = message;
  element.className = `${element.classList.contains("page-message") ? "page-message" : "form-message"} ${type}`;
}

function clearMessages(target) {
  const elements = target ? [target] : [formMessage, pageMessage];

  elements.forEach((element) => {
    element.textContent = "";
    element.className = element.classList.contains("page-message") ? "page-message" : "form-message";
  });
}
