import React from 'react'
import Image from 'next/image'

const Logos = () => {
    const images = [

    ]
    return (
        <div>
            {images.map((image) => (
                <Image key={images}
                    alt={image.alt}
                    width={50}
                    height={50}
                />
            ))}
        </div>
    )
}