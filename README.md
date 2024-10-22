# ThrillOP
> Tour travel website for kashmir


### Database ER Diagram 
![ER Diagram](https://www.plantuml.com/plantuml/dpng/fP91Yzim48Nl-XNJz51GCQIXkVIqxZgq1cUxfDxUn_RK5YjBgIKNJBp_lR8I4YSua9AR-Dwy6Tve7ep5nhQrPEziHJL1tcMwAGFTMYaKCL9Ms0vcpvY_Oacp7GFuoBaeE8SlyF8IHmvmxeeaUVGht3n-3pV1Skw5Wan-nXVBfHUCbZh8jR5UZLQFyJfCzfRsYb1JdL5pnOITyV2d8qdyb7ggH5dP2PutX9Rs6Q8mNQNnUiNUs37jLwdBQr4LrfD9CrrqOmxhwAPP4NRtR_NJVF7vfcdF4dEwDThzurBqUxoODJLgCNU-otCRxE3yxpdVxaamwkEvnNBCnaqImc86_vdLMBIjSShPmVnfgUacxtXRQKLUINuyVVE8QXJolBSFzm4Y-YsKK2LiIA8LMfbAR0qxf8M-3_GE8koSLHWGYWrlHuCT-8zpF4S56S5VOOIbWWsNEbJq_R6YGiDE-uCt7GnTtTDfKgXNAYvafnx0gO8za2hQMlu3)


<<<<<<< HEAD
<<<<<<< HEAD
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
=======
$$\color{green}\textsf{A } Thrill~Top~Journeys \textsf{ Product}$$
>>>>>>> d8cff6d (Update README.md)
=======
$$\color{green}\textsf{A } Thrill~Top~Journeys \textsf{ Product}$$
=======
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
>>>>>>> 3ae9690 (feat: new schema)
>>>>>>> c7bb9c0 (feat: new schema)
