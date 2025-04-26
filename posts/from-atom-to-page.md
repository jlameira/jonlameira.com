---
layout: post
date: '2025-04-21 10:00:00'
image: /assets/img/atomic-design-aplicado.jpg
title: From Atom to Page - Aplicando Atomic Design com Next.js
description: >-
  Um guia técnico com exemplos reais de como aplicar todos os níveis do Atomic Design em um projeto com React + Next.js.
introduction: >-
  Atomic Design é uma ótima referência conceitual, mas na prática, times enfrentam problemas de acoplamento, legibilidade e escalabilidade quando tentam reaproveitar componentes. Neste artigo, trago uma abordagem moderna e sênior para aplicar o modelo com clareza arquitetural, usando React, Next.js e composição declarativa.
twitter_text: >-
  Novo artigo no blog: aplicando todos os níveis do Atomic Design em projetos Next.js com foco em escalabilidade, clareza e reuso consciente.
main-class: front
color: '#4C5A73'
tags:
  - frontend
  - atomic-design
  - react
  - nextjs
  - arquitetura
---

## 🧩 Por que "From Atom to Page"?

Atomic Design é mais do que um jeito de nomear pastas.  
É uma forma de pensar a arquitetura de componentes com **clareza semântica**, **reaproveitamento consciente** e **manutenção fácil**.

Neste artigo, você vai ver:
- Como estruturar seu projeto por nível (átomos, moléculas, organismos, templates e páginas)
- Como aplicar isso com **Next.js (App Router)** e **Tailwind CSS**
- Como escrever componentes realmente reutilizáveis — sem cair no buraco das props infinitas

---

## 🚫 O problema: componentes genéricos demais

```tsx
<Card
  title="Produto A"
  description="Descrição"
  icon={<Info />}
  withActions
  variant="info"
  size="compact"
/>
```

O código *parece reutilizável*, mas:
- Fica acoplado demais à lógica interna
- Quebra facilmente em escala
- Fica difícil de manter e testar

---

## ✅ A solução: composição clara + Atomic Design

### Átomos (Text + Button)

```tsx
export const Text = ({ as: Tag = 'p', children }: {
  as?: React.ElementType;
  children: React.ReactNode;
}) => (
  <Tag className="text-base text-zinc-700 dark:text-zinc-300">{children}</Tag>
);

export const Button = ({ children, ...props }: {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 text-sm"
    {...props}
  >
    {children}
  </button>
);
```

---

### Moléculas

```tsx
export const CardHeader = ({ icon, title }: {
  icon?: React.ReactNode;
  title: React.ReactNode;
}) => (
  <div className="flex items-center gap-3">
    {icon && (
      <span className="inline-flex items-center justify-center h-5 w-5 text-blue-500">
        {icon}
      </span>
    )}
    {title}
  </div>
);

export const CardActions = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-end items-center">
    {children}
  </div>
);
```

---

### Organismo

```tsx
export const Card = ({
  header,
  children,
  actions,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
  actions?: React.ReactNode;
}) => (
  <div className="bg-zinc-800 dark:bg-zinc-900 rounded-xl shadow-lg/5 overflow-hidden">
    <div className="divide-y divide-zinc-700">
      <div className="p-6 flex justify-between items-start">
        {header}
        {actions && <div>{actions}</div>}
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  </div>
);
```

---

### Template (CardListTemplate)

```tsx
export const CardListTemplate = ({ cards }: {
  cards: { icon: React.ReactNode; title: string; description: string }[];
}) => (
  <div className="grid gap-6 md:grid-cols-2">
    {cards.map((card, idx) => (
      <Card
        key={idx}
        header={<CardHeader icon={card.icon} title={<Text as="h3" variant="title">{card.title}</Text>} />}
        actions={<CardActions><Button>See more</Button></CardActions>}
      >
        <Text variant="body">{card.description}</Text>
      </Card>
    ))}
  </div>
);
```

---

### Página (`app/produtos/page.tsx`)

```tsx
import { Info, AlertTriangle } from 'lucide-react';
import { CardListTemplate } from '@/components/templates/CardListTemplate';

export default function ProdutosPage() {
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-zinc-100 dark:text-zinc-100 mb-6">
        Products
      </h1>
      <CardListTemplate
        cards={[
          { title: 'Product A', description: 'Description A', icon: <Info size={20} /> },
          { title: 'Product B', description: 'Description B', icon: <AlertTriangle size={20} /> },
        ]}
      />
    </main>
  );
}
```

---

## 🎯 Conclusão

Atomic Design só funciona quando:

- Cada componente tem responsabilidade clara
- A composição vem antes da configuração
- O time fala a mesma linguagem semântica

Este exemplo mostra **como escalar design system com estrutura de verdade**, sem cair em abstrações frágeis.

---
#### Github
O repositório com todos os exemplos do artigo (e dos carrosséis) está disponível em:  
👉 [github.com/jlameira/from-atom-to-page](https://github.com/jlameira/from-atom-to-page)
