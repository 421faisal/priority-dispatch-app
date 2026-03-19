const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'app/blog');

const images = [
    { src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80', alt: 'A powerful white semi-truck parked confidently at a modern logistics facility.' },
    { src: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80', alt: 'Sunrise over a busy commercial highway with an 18-wheeler transporting freight.' },
    { src: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80', alt: 'Front grill and headlights of a heavy-duty commercial truck ready for dispatch.' },
    { src: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80', alt: 'An expansive logistics warehouse preparing shipments for nationwide delivery.' },
    { src: 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?auto=format&fit=crop&q=80', alt: 'A delivery vehicle navigating urban streets for last-mile logistics.' },
    { src: 'https://images.unsplash.com/photo-1580674684081-776dd8f78a70?auto=format&fit=crop&q=80', alt: 'Massive shipping containers stacked at a bustling international port.' },
    { src: 'https://images.unsplash.com/photo-1494412519320-aa3da3712698?auto=format&fit=crop&q=80', alt: 'Heavy commercial traffic moving swiftly along an interstate highway bridge.' },
    { src: 'https://images.unsplash.com/photo-1521703273398-33bc0f49dca0?auto=format&fit=crop&q=80', alt: 'A driver’s sideview mirror reflecting the long stretch of open road behind a freight trailer.' },
    { src: 'https://images.unsplash.com/photo-1504917595217-d4f3902ce127?auto=format&fit=crop&q=80', alt: 'A flatbed truck reliably transporting heavy timber down a scenic forest highway.' },
    { src: 'https://images.unsplash.com/photo-1590496794008-3fe8dc343bf4?auto=format&fit=crop&q=80', alt: 'Nighttime logistics operations showing dedication to 24/7 freight delivery.' },
    { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80', alt: 'A warehouse worker utilizing modern technology for automated inventory processing.' },
    { src: 'https://images.unsplash.com/photo-1605810730412-28c9468972ac?auto=format&fit=crop&q=80', alt: 'An aerial drone view capturing a fleet of trucks moving along a complex highway interchange.' },
    { src: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80', alt: 'A visual representation of significant financial tracking and revenue growth in logistics.' },
    { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80', alt: 'Logistics consultants engaged in a strategic dispatch planning session over a laptop.' },
    { src: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'A powerful semi-truck parked under a blazing sky, representing immense freight capacity.' },
    { src: 'https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'A massive fleet of commercial trucks lined up perfectly at a secure terminal.' },
    { src: 'https://images.pexels.com/photos/2862070/pexels-photo-2862070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'A pristine commercial truck cutting through the landscape on a clear afternoon.' },
    { src: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Supply chain experts analyzing route optimization data on a digital spreadsheet.' },
    { src: 'https://images.pexels.com/photos/5053738/pexels-photo-5053738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'A modern dispatch operator coordinating loads directly via a mobile application.' },
    { src: 'https://images.pexels.com/photos/6169002/pexels-photo-6169002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'A distribution center worker carefully scanning and loading vital cargo.' },
    { src: 'https://images.pexels.com/photos/4481323/pexels-photo-4481323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'A red semi-truck hauling heavy machinery through a rural industrial zone.' },
    { src: 'https://images.pexels.com/photos/1122409/pexels-photo-1122409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'A convoy of trucks executing a long-haul supply run during winter conditions.' },
    { src: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'A sweeping aerial view of an elaborate highway system filled with freight traffic.' },
    { src: 'https://images.pexels.com/photos/2800121/pexels-photo-2800121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'The expansive interior of a logistics fulfillment center optimized for high volume.' },
    { src: 'https://images.pexels.com/photos/4508930/pexels-photo-4508930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'A dedicated truck driver reviewing manifest paperwork inside their modern cab.' },
    { src: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'An immaculate big rig positioned gracefully on the tarmac before a massive haul.' },
];

let imgIndex = 0;

function processFolder(folderPath) {
    if (!fs.statSync(folderPath).isDirectory()) return;
    const pagePath = path.join(folderPath, 'page.tsx');
    if (fs.existsSync(pagePath)) {
        let content = fs.readFileSync(pagePath, 'utf8');
        // Regex to match the typical hero image structure
        // <img
        //     src="/images/hero-..."
        //     alt="..."
        //     className="object-cover w-full h-full"
        // />
        const regex = /<img[\s\n]+src="\/images\/[^"]+"[\s\n]+alt="[^"]+"[\s\n]+className="([^"]+)"[\s\n]*\/>/;
        
        if (regex.test(content)) {
            const nextImage = images[imgIndex % images.length];
            const updated = content.replace(regex, `<img\n                                src="${nextImage.src}"\n                                alt="${nextImage.alt}"\n                                className="$1"\n                            />`);
            fs.writeFileSync(pagePath, updated, 'utf8');
            imgIndex++;
            console.log(`Updated ${pagePath}`);
        } else {
            // Might have been already updated to pexels/unsplash or different format
            const alternateRegex = /<img[\s\n]+src="https:\/\/[^"]+"[\s\n]+alt="[^"]+"[\s\n]+className="([^"]+object-cover w-full h-full[^"]*)"[\s\n]*\/>/;
            if (alternateRegex.test(content)) {
                // If it's already an external image (from my earlier multi_replace but I only added internal body images, not hero)
                // Wait, if it's already using a hardcoded Pexels image as hero, we also want to randomize it so every blog is unique!
                const nextImage = images[imgIndex % images.length];
                const updated = content.replace(alternateRegex, `<img\n                                src="${nextImage.src}"\n                                alt="${nextImage.alt}"\n                                className="$1"\n                            />`);
                fs.writeFileSync(pagePath, updated, 'utf8');
                imgIndex++;
                console.log(`Updated external image to unique one in ${pagePath}`);
            }
        }
    }
}

fs.readdirSync(directoryPath).forEach(folder => {
    processFolder(path.join(directoryPath, folder));
});

console.log(`Successfully assigned unique HD images to ${imgIndex} blogs.`);
