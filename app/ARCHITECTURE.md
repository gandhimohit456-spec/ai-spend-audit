# Architecture

## System Overview

```mermaid
flowchart TD

A[User Opens Website] --> B[Audit Form]

B --> C[User Inputs AI Spend Data]

C --> D[Local Storage Persistence]

D --> E[Audit Engine]

E --> F [Savings Calculation]

F -- > G[AI Summary Generation]

G --> H[Audit Result Page]

H --> I[Lead Capture Form]

I --> J[(Database)]