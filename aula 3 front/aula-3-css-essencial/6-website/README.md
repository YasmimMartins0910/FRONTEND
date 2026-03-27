# 🎵 FrontEnd News - Website Completo

Site de notícias sobre cultura e música aplicando os conceitos fundamentais de CSS aprendidos na Aula 3.

---

## 📚 Conceitos Aplicados

### 1. CSS Reset

Reset básico para remover espaçamentos padrão do navegador e facilitar o controle do layout.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

**Por que usar?**
- Remove inconsistências entre navegadores
- `box-sizing: border-box` facilita o cálculo de tamanhos (width inclui padding e border)

---

### 2. Seletores CSS

#### Seletor de Elemento (Tag)
Estiliza todos os elementos do tipo especificado:

```css
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #000;
  background-color: #f6f5f6;
}

a {
  color: #5838ea;
  text-decoration: none;
  border-bottom: dotted 2px #5938ea89;
}
```

#### Seletor de Classe
Usa ponto (`.`) antes do nome. Pode ser reutilizado em múltiplos elementos:

```css
.header {
  padding: 24px;
  border-bottom: 2px solid #000;
}

.section {
  padding: 8px 16px;
  border: solid 1px #000;
}

.trending-list {
  list-style: none;
}
```

#### Seletor de ID
Usado para navegação e âncoras no HTML:

```html
<section id="highlights">
<section id="latest">
<aside id="trending">
```

#### Seletor Descendente
Estiliza elementos dentro de outro elemento (usa espaço):

```css
.header h1 {
  font-size: 32px;
  margin-bottom: 5px;
}

.header p {
  font-size: 18px;
  color: #666;
}

article p {
  color: #666;
}

.trending-list li {
  margin-bottom: 8px;
  color: #5838ea;
}
```

#### Seletor de Filho Direto
Seleciona apenas filhos diretos (usa `>`):

```css
.header > div {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}
```

#### Pseudo-classes
Selecionam estados especiais de elementos:

```css
/* :hover - quando o mouse passa por cima */
a:hover {
  color: #e74c3c;
}

/* :last-child - seleciona o último filho */
.trending-list li:last-child {
  margin-bottom: 0;
  color: #e74c3c;
}
```

---

### 3. Display & Flexbox

#### Display Flex
Transforma um container em flexbox para alinhar itens facilmente:

```css
nav {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
}

main {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 40px 24px;
}
```

#### Propriedades Flexbox Usadas

**`justify-content`** - Alinhamento horizontal:
- `center` - Centraliza itens (usado no nav)
- `space-between` - Espaça itens com extremos nas bordas (usado no main)

**`gap`** - Espaçamento entre itens flex:
```css
gap: 24px; /* Substitui margin entre itens */
```

**`flex-wrap`** - Permite quebra de linha:
```css
flex-wrap: wrap; /* Itens quebram em telas menores */
```

---

### 4. Margin & Padding

#### Padding (Espaçamento Interno)
Cria espaço dentro do elemento:

```css
.header {
  padding: 24px;
}

.section {
  padding: 8px 16px; /* vertical horizontal */
}
```

#### Margin (Espaçamento Externo)
Cria espaço fora do elemento:

```css
.header > div {
  margin: 0 auto; /* Centraliza horizontalmente */
}

figure {
  margin: 16px 0; /* vertical horizontal */
}

article {
  margin-bottom: 24px;
}
```

---

### 5. Box Model

Todos os elementos seguem o Box Model:

```
┌─────────────────────────────────┐
│         MARGIN (externo)        │
│  ┌───────────────────────────┐  │
│  │     BORDER (borda)        │  │
│  │  ┌─────────────────────┐  │  │
│  │  │  PADDING (interno)  │  │  │
│  │  │  ┌───────────────┐  │  │  │
│  │  │  │   CONTENT     │  │  │  │
│  │  │  └───────────────┘  │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

Graças ao `box-sizing: border-box`, o padding e border são incluídos no width total.

---

### 6. Estrutura Semântica HTML5

```
body
├── header.header
│   ├── div (logo/título)
│   └── nav (menu)
├── main
│   ├── section#highlights.section (artigos principais)
│   ├── section#latest.section (últimas notícias)
│   └── aside#trending.section (sidebar)
└── footer.footer
```

---

## 🎨 Paleta de Cores

- **Primary**: `#5838ea` (roxo)
- **Hover**: `#e74c3c` (vermelho)
- **Background**: `#f6f5f6` (cinza claro)
- **Text**: `#000` (preto)
- **Secondary Text**: `#666` (cinza)

---

## 🎯 Conceitos Importantes

1. **CSS Reset** - Base limpa para começar o estilo
2. **Seletores variados** - Elemento, classe, descendente, filho direto, pseudo-classes
3. **Flexbox** - Layout moderno e responsivo
4. **Box Model** - Controle preciso de espaçamentos
5. **Semântica HTML5** - Estrutura clara e acessível
6. **Gap** - Espaçamento entre itens flex (melhor que margin)

---

## 🚀 Como Visualizar

Abra o `index.html` no navegador para ver o resultado final!

---

## 📖 Referências da Aula 3

Este projeto aplica os conceitos de:
- `1-seletores-css` - Todos os tipos de seletores
- `2-display-block-inline-flex` - Display e Flexbox básico
- `3-margin-padding-box-sizing` - Espaçamentos e Box Model
- `4-flexbox` - Propriedades do Flexbox
- `5-css-reset` - Reset CSS básico