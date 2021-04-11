import ExperienceList from './ExperienceList'

const Experience = () => {
    return (
        <>
            <div className="experience" id="experience">
                <h1>Experiencia</h1>
            </div>

            <ExperienceList
                employer='Qiero App'
                position='Product Manager'
                date='2020 - Hoy'
            />

            <ExperienceList
                employer='Alimentos Almendral'
                position='Product Manager'
                date='2019 - 2020'
            />

            <ExperienceList
                employer='Simulmedic'
                position='Planificación Estratégica'
                date='2018 - 2019'
            />

        </>
    )
};

export default Experience
