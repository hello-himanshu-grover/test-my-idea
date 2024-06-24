import React from 'react'
import Link from 'next/link'

interface Props {
  imgSrc: string,
  title: string,
  navigateTo: string
}

export default function Thumbnail(props: Props) {
  const { imgSrc, title, navigateTo } = props;
  return (
    <Link href={navigateTo}>
      <div className="text-center">
        <img className="rounded-lg w-full object-cover aspect-square" src={imgSrc} alt="" />
        <h5 className="mt-2 text-large tracking-tight text-gray-900 dark:text-white">{title}</h5>
      </div>
    </Link>
  )
}
