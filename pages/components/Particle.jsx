import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

function Particle() {
    const optionsVar = {
        fullScreen: {
            zIndex: -10,
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "grab",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 2,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#f2cc00",
            },
            links: {
                color: "#f2cc00",
                distance: 150,
                enable: true,
                opacity: 0.75,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                directions: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    }

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles 
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}

        options={
            optionsVar
        }

        />
    )
}

export default Particle