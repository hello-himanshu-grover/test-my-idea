import React from 'react'
import Thumbnail from '../components/Thumbnail'

interface Template {
    imgSrc: string,
    title: string,
    tags: string[]
}

const templates: Template[] = [
    {
        "imgSrc": "https://picsum.photos/200/300?random=1",
        "title": "Modern Business Layout",
        "tags": ["business", "modern", "corporate"]
    },
    {
        "imgSrc": "https://picsum.photos/200/300?random=2",
        "title": "Creative Portfolio",
        "tags": ["portfolio", "creative", "design"]
    },
    {
        "imgSrc": "https://picsum.photos/200/300?random=3",
        "title": "E-commerce Storefront",
        "tags": ["e-commerce", "storefront", "shop"]
    },
    {
        "imgSrc": "https://picsum.photos/200/300?random=4",
        "title": "Tech Blog",
        "tags": ["blog", "tech", "news"]
    },
    {
        "imgSrc": "https://picsum.photos/200/300?random=5",
        "title": "Travel Guide",
        "tags": ["travel", "guide", "adventure"]
    },
    {
        "imgSrc": "https://picsum.photos/200/300?random=6",
        "title": "Food and Recipes",
        "tags": ["food", "recipes", "cooking"]
    },
    {
        "imgSrc": "https://picsum.photos/200/300?random=7",
        "title": "Fitness and Health",
        "tags": ["fitness", "health", "wellness"]
    },
    {
        "imgSrc": "https://picsum.photos/200/300?random=8",
        "title": "Fashion Lookbook",
        "tags": ["fashion", "lookbook", "style"]
    },
    {
        "imgSrc": "https://picsum.photos/200/300?random=9",
        "title": "Music Band Website",
        "tags": ["music", "band", "concert"]
    },
    {
        "imgSrc": "https://picsum.photos/200/300?random=10",
        "title": "Online Learning Platform",
        "tags": ["education", "learning", "online"]
    }
]


export default function SelectTemplate() {
    return (
        <div className='p-10'>
            <h1 className='text-2xl font-bold mb-4'>Pick the Website Template You Love</h1>
            <div className="grid grid-cols-4 gap-10">
                {templates.map(template => (
                    <Thumbnail {...template} navigateTo={'/fill-details'} key={template.title} />
                ))}
            </div>
        </div>
    )
}
