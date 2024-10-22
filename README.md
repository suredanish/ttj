<<<<<<< HEAD
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
=======
# ttj
Thrill Top Journeys
>>>>>>> 971634ccaf9000afe01588acf97f49e072e901c8

@startuml
!theme cyborg-outline
entity "Package"{
  +**id** : UUID
  **title** : VARCHAR-50
  **desc** : VARCHAR-255
  **solo-cost** : DECIMAL
  **duo-cost** : DECIMAL
  **member-cost** : DECIMAL
  **days** : SMALLINT
  **nights** : SMALLINT
  **created** : DATETIME
}

entity "PackageDay" {
  #**packageId** : UUID
  #**dayId** : UUID
}

entity "Day"{
  +**id** : UUID
  **title** : VARCHAR-50
  **desc** : VARCHAR-1024
  **created** : DATETIME
}


entity "DayPlace"{
  #**dayId** : UUID
  #**placeId** : UUID
}

entity "Place"{
  +**id** : UUID
  **name** : VARCHAR-50
  **desc** : VARCHAR-1024
  **created** : DATETIME
}

entity "Blog"{
  +**id** : UUID
  **name** : VARCHAR-50
  **body** : VARCHAR MD
  **created** : DATETIME
}


entity "Tag"{
 +**id** : UUID
 **name** : VARCHAR-20
}

entity "PackageTag" {
 #**packageId** : UUID
 #**tagId** : UUID
}

entity "Lead" {
  +**id** : UUID
  **name** : VARCHAR-50
  **status** ENUM
  **query** : VARCHAR-255
  **phone** : LONG
  **email** : VARCHAR-50
}

entity "Review"{
  +**id** : UUID
  **person** : VARCHAR-50
  **body** : VARCHAR-511
  #leadId** : UUID
}

' Defining Relationships
Package |o-o{ Lead : can have
Package }o--o{ PackageDay : linked
PackageDay }o--o{ Day : linked
Day }o--o{ DayPlace : linked
DayPlace }o--o{ Place : linked
Blog ||-|| Place : has
PackageTag ||--|| Tag : linked
PackageTag ||-|| Package : linked
Lead }o--|| Review : can have
@enduml
