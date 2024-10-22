import { LeadStatus, Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
const prisma = new PrismaClient();

async function seed(prismatx: Omit<PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends">)
{
    const places = await prismatx.place.createManyAndReturn({
        data: [
            { name: 'Srinagar', desc: 'The summer capital of Jammu & Kashmir' },
            { name: 'Dal Lake', desc: 'Famous lake in center of city, famous for it barbque' },
            { name: 'Aru Valley', desc: 'Valley between Perpanchal range moutails' },
            { name: 'Gulmarg', desc: 'Popular for skiing and beautiful meadows' },
            { name: 'Pahalgam', desc: 'A scenic town in Kashmir' },
            { name: 'Sonamarg', desc: 'Known for its golden meadows' },
            { name: 'Leh', desc: 'Gateway to the Himalayas' },
            { name: 'Nubra Valley', desc: 'Famous for its sand dunes' },
            { name: 'Pangong Lake', desc: 'A high-altitude lake shared with China' },
            { name: 'Kargil', desc: 'Known for the Kargil War' },
            { name: 'Drass', desc: 'Second coldest inhabited place on Earth' },
            { name: 'Zanskar Valley', desc: 'Isolated valley in the Himalayas' }
        ],
    });
    const days = await prismatx.day.createManyAndReturn({
        data: [
            { title: 'Srinagar, Gulmarg, Tangmarg', desc: 'Experience the scenic beauty of Srinagar, enjoy skiing in Gulmarg, and take a stroll through the picturesque Tangmarg.' },
            { title: 'Pahalgam, Srinagar, Dal Lake', desc: 'Start the day in the lush surroundings of Pahalgam, then visit Srinagar and unwind by Dal Lake.' },
            { title: 'Gulmarg, Pahalgam', desc: 'A day filled with adventure, skiing in Gulmarg followed by a relaxing evening in Pahalgam.' },
            { title: 'Sonamarg, Zanskar Valley', desc: 'Discover the golden meadows of Sonamarg, then explore the breathtaking Zanskar Valley.' },
            { title: 'Leh, Nubra Valley', desc: 'Enjoy a scenic drive from Leh to Nubra Valley, famous for its unique sand dunes.' },
            { title: 'Pangong Lake, Leh', desc: 'Take a day trip to the stunning Pangong Lake and return to Leh for a cultural evening.' },
            { title: 'Drass, Kargil', desc: 'Explore the historical significance of Drass and Kargil, known for their war memorials and scenic views.' },
            { title: 'Aru Valley, Pahalgam', desc: 'A relaxing day in the serene Aru Valley, followed by a visit to Pahalgam for its breathtaking landscapes.' },
            { title: 'Srinagar, Dal Lake, Hazratbal Shrine', desc: 'Enjoy the tranquility of Dal Lake and visit the beautiful Hazratbal Shrine in Srinagar.' },
            { title: 'Khardung La Pass, Nubra Valley', desc: 'Experience an adventurous day trip to Khardung La Pass, followed by exploration of Nubra Valley.' },
            { title: 'Srinagar, Dachigam National Park', desc: 'Visit the beautiful Dachigam National Park and explore the rich wildlife of the region.' },
            { title: 'Leh, Shanti Stupa', desc: 'A peaceful day in Leh visiting the stunning Shanti Stupa and exploring the local markets.' },
            { title: 'Sonamarg, Thajiwas Glacier', desc: 'Discover the beauty of Sonamarg and enjoy a trek to the stunning Thajiwas Glacier.' },
            { title: 'Gulmarg, Khilanmarg', desc: 'Enjoy a day of skiing in Gulmarg and take a cable car ride to the beautiful Khilanmarg.' },
            { title: 'Pangong Lake, Tso Moriri', desc: 'Explore the stunning landscapes of Pangong Lake and the high-altitude Tso Moriri.' },
        ],
    });
    const packages = await prismatx.package.createManyAndReturn({
        data: [
            {
                title: "Gulmarg Adventure and Skiing Tour",
                desc: "Experience the thrill of skiing in the snow-capped mountains of Gulmarg. Enjoy a luxurious stay in a resort and indulge in adventure sports like snowboarding and trekking.",
                soloCost: 15099.00,
                duoCost: 28099.00,
                memberCost: 12099.00,
                days: 4,
                nights: 3,
            },
            {
                title: "Pahalgam Nature Retreat",
                desc: "Immerse yourself in the serene beauty of Pahalgam. This package includes a stay by the Lidder River, nature walks, and visits to Aru Valley and Betaab Valley.",
                soloCost: 12099.00,
                duoCost: 22099.00,
                memberCost: 10099.00,
                days: 3,
                nights: 2,
            },
            {
                title: "Sonamarg Explorer",
                desc: "Discover the enchanting landscapes of Sonamarg. Enjoy scenic treks, visit Thajiwas Glacier, and experience local cuisine.",
                soloCost: 10099.00,
                duoCost: 18099.00,
                memberCost: 9099.00,
                days: 3,
                nights: 2,
            },
            {
                title: "Leh-Ladakh Odyssey",
                desc: "Embark on an unforgettable journey to Leh-Ladakh. Explore Pangong Lake, Nubra Valley, and the majestic monasteries. A perfect adventure for thrill-seekers!",
                soloCost: 30099.00,
                duoCost: 55099.00,
                memberCost: 90099.00,
                days: 7,
                nights: 6,
            },
            {
                title: "Kashmir Cultural Experience",
                desc: "Dive into the rich culture of Kashmir with this package. Explore local markets, attend traditional music and dance performances, and savor authentic Kashmiri cuisine.",
                soloCost: 9099.00,
                duoCost: 16099.00,
                memberCost: 8099.00,
                days: 5,
                nights: 4,
            },
            {
                title: "Adventure in Zanskar Valley",
                desc: "An exciting package that includes trekking, river rafting, and exploring the stunning landscapes of Zanskar Valley.",
                soloCost: 20099.00,
                duoCost: 38099.00,
                memberCost: 18099.00,
                days: 6,
                nights: 5,
            },
            {
                title: "Wildlife Safari in Dachigam National Park",
                desc: "Experience the diverse wildlife of Kashmir with a thrilling safari in Dachigam National Park. Explore the beautiful landscapes and enjoy bird watching.",
                soloCost: 11099.00,
                duoCost: 20099.00,
                memberCost: 10099.00,
                days: 4,
                nights: 3,
            },
            {
                title: "Camping in the Himalayas",
                desc: "A unique camping experience in the breathtaking Himalayas. Enjoy bonfires, stargazing, and the tranquility of nature.",
                soloCost: 8599.00,
                duoCost: 15099.00,
                memberCost: 7099.00,
                days: 3,
                nights: 2,
            },
            {
                title: "Kashmir Honeymoon Special",
                desc: "A romantic getaway for couples. Enjoy candlelight dinners, houseboat stays, and personalized services to make your honeymoon memorable.",
                soloCost: 18099.00,
                duoCost: 33099.00,
                memberCost: 15099.00,
                days: 5,
                nights: 4,
            },
            {
                title: "Kashmir Photography Tour",
                desc: "Capture the stunning landscapes of Kashmir with this photography tour. Visit iconic spots, attend workshops, and enhance your photography skills.",
                soloCost: 15099.00,
                duoCost: 28099.00,
                memberCost: 13099.00,
                days: 5,
                nights: 4,
            },
        ]
    })

    // Create days and link places
    const dayPlacelinksToCreate: { dayId: string, placeId: string }[] = []
    for (const place of places) {
        const matchingDays = days.filter(d => d.title.includes(place.name))
        dayPlacelinksToCreate.concat(matchingDays.map(d => { return { placeId: place.id, dayId: d.id } }))
    }
    const dayPlaceLinks = await prismatx.dayPlace.createManyAndReturn({ data: dayPlacelinksToCreate })

    const packageDaysToCreate: { packageId: string, dayId: string }[] = []
    for (const pkg of packages) {
            let daysForPkgSet = new Set() 
            while(daysForPkgSet.size != pkg.days) {
                const randomDayId = days[Math.floor(Math.random() * days.length)].id
                if(!daysForPkgSet.has(randomDayId)){
                    daysForPkgSet.add(randomDayId)
                    packageDaysToCreate.push({packageId: pkg.id, dayId: randomDayId})
                }
        }
    }
    const packgeDays = await prismatx.packageDay.createManyAndReturn({ data: packageDaysToCreate })
    const tags = await prismatx.tag.createManyAndReturn({
        data: [
            { name: "Trekking" },
            { name: "Hiking" },
            { name: "Mountaineering" },
            { name: "Skiing" },
            { name: "Snowboarding" },
            { name: "Paragliding" },
            { name: "Hot Air Ballooning" },
            { name: "Camping" },
            { name: "Fishing" },
            { name: "River Rafting" },
            { name: "Kayaking" },
            { name: "White Water Rafting" },
            { name: "Bungee Jumping" },
            { name: "Ziplining" },
            { name: "Rock Climbing" },
            { name: "Caving" },
            { name: "Cycling" },
            { name: "Mountain Biking" },
            { name: "Road Cycling" },
            { name: "Horse Riding" },
            { name: "Camel Riding" },
            { name: "Jeep Safari" },
            { name: "Wildlife Safari" },
            { name: "Bird Watching" },
            { name: "Photography" },
            { name: "Sightseeing" },
            { name: "Shopping" },
            { name: "Cultural Experiences" },
            { name: "Local Cuisine" },
            { name: "Festivals" },
            { name: "Music" },
            { name: "Dance" },
            { name: "Arts and Crafts" },
            { name: "Yoga" },
            { name: "Meditation" },
            { name: "Spa Treatments" },
            { name: "Wellness Activities" },
            { name: "Adventure Sports" },
            { name: "Extreme Sports" },
            { name: "Outdoor Activities" },
            { name: "Nature Activities" },
            { name: "Cultural Tourism" },
            { name: "Heritage Tourism" },
            { name: "Adventure Tourism" },
            { name: "Wildlife Tourism" },
            { name: "Eco-Tourism" },
            { name: "Rural Tourism" },
            { name: "Community Tourism" },
            { name: "Responsible Tourism" },
            { name: "Sustainable Tourism" },
            { name: "Ethical Tourism" },
            { name: "Adventure Travel" },
            { name: "Experience Travel" },
            { name: "Immersive Travel" },
            { name: "Unique Experiences" },
            { name: "Hidden Gems" },
            { name: "Local Secrets" },
            { name: "Insider Tips" },
            { name: "Authentic" },
            { name: "Cultural Exchange" },
        ]
    })

    let leadsToCreate = [];

    for (let i = 1; i <= 50; i++) {
        leadsToCreate.push({
            person: getRandomPersonName(),
            status: generateRandomstatus(),
            query: `Inquiry regarding package details from Lead ${i}`,
            phone: generateRandomPhone(),
            email: `lead${i}@example.com`,
        });
    }

    const leads = await prismatx.lead.createManyAndReturn({ data: leadsToCreate });

    const reviewsToCreate = []
    const wonLeads = leads.filter(l => l.status == LeadStatus.WON)
    for (let j = 1; j <= 40; j++) {
        const randomWonLead = wonLeads[Math.floor(Math.random() * wonLeads.length)]; // Randomly pick a lead

        reviewsToCreate.push({
            person: getRandomPersonName(),
            body: generateRandomReview(),
            leadId: randomWonLead.id,
        });
    }

    await prismatx.review.createMany({ data: reviewsToCreate })

    // Assign Random Tags to Packages
    const packageTagAssignments = [];
    for (let i = 0; i < packages.length; i++) {
        const tagIds = tags.map(t => t.id)
        const randomArray = Array.from({ length: Math.floor(Math.random() * 5) }, () => Math.floor(Math.random() * tags.length) + 1);
        for (const tagIndex of randomArray) {
            packageTagAssignments.push({ packageId: packages[i].id, tagId: tagIds[tagIndex] });
        }
    }

    const packageTags = await prismatx.packageTag.createMany({
        data: packageTagAssignments,
    });

    console.log('Seed data added successfully');
} 

async function main() {
    await prisma.$transaction(async tx => seed(tx))
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });


function generateRandomPhone() { return Math.floor(1000000000 + Math.random() * 9000000000) }
function generateRandomstatus() {
    const statusKeys = Object.values(LeadStatus);
    return statusKeys[Math.floor(Math.random() * statusKeys.length)];
}
function getRandomPersonName() {
    const names = [
        'Aarav Sharma', 'Aditi Patel', 'Ayaan Khan', 'Diya Gupta', 'Kartik Mehta',
        'Krishna Iyer', 'Lakshmi Rao', 'Maya Singh', 'Neha Joshi', 'Rahul Verma',
        'Riya Desai', 'Siddharth Reddy', 'Tanvi Sharma', 'Vikram Choudhary', 'Yash Gupta',
        'Zoya Khan', 'Arjun Nair', 'Divya Iyer', 'Harsh Patel', 'Isha Agarwal',
        'Kabir Malhotra', 'Mohan Rao', 'Naina Kapoor', 'Omi Sharma', 'Prisha Sharma',
        'Rajesh Kumar', 'Sakshi Verma', 'Tanay Bhatt', 'Utkarsh Gupta', 'Vani Mehta',
        'Aarushi Singh', 'Bhavna Mehta', 'Chaitanya Reddy', 'Devesh Yadav', 'Gauri Chawla',
        'Himanshu Verma', 'Jayesh Deshmukh', 'Kanika Sharma', 'Lalit Kumar', 'Mithila Joshi',
        'Nikhil Sinha', 'Pooja Tiwari', 'Rohan Joshi', 'Sonia Malik', 'Vishal Patil',
        'Ananya Yadav', 'Deepak Sharma', 'Nitin Gupta', 'Surbhi Sinha'
    ];
    return names[Math.floor(Math.random() * names.length)];
}

function generateRandomReview() {
    const reviewTemplates = [
        `I had an amazing experience working with ThrillOP. Their service was top-notch!`,
        `The team at ThrillOP went above and beyond to meet my needs. Highly recommended!`,
        `I am very satisfied with the service provided by ThrillOP. They delivered exactly what they promised.`,
        `Excellent service from ThrillOP. I felt valued as a customer, and my needs were met promptly.`,
        `Working with ThrillOP was a pleasure. They are very professional and attentive to details.`,
        `I highly recommend ThrillOP. They exceeded my expectations in every way!`,
        `The attention to detail and customer service from ThrillOP is outstanding!`,
        `I'm very happy with my experience at ThrillOP. They made the whole process smooth and easy.`,
        `Thanks to ThrillOP, my needs were met with excellent service and support. Will definitely return!`,
        `The quality of service from ThrillOP was remarkable. I couldn't have asked for a better experience.`,
    ];
    return reviewTemplates[Math.floor(Math.random() * reviewTemplates.length)];
}