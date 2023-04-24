import React from 'react'
import Image from 'next/image'

function logos(props) {
    return (
        <>
            <Image
                src={`/public/${img}.png`}
                alt={logo.alt}
                width={50}
                height={50}
                className="iconlogo"
            />
            <div className="iconstack">
                        {logos && logos.map((logo) => {
                            return (
                                <Logos
                                    key={logo.id}
                                    src={logo.src}
                                    alt={logo.alt}
                                />
                            )
                            })}
                    </div>
        </>
    )
}

export default logos