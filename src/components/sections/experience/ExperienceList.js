
const ExperienceList = (props) => {
    return (
        <div className='experience__list'>
            <div className='experience__card'>
                <div className="experience__card__item">
                    <table>
                        <thead>
                            <tr>
                                <th>Empleador</th>
                                <th>Cargo</th>
                                <th>Año</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>{props.employer}</td>
                                <td>{props.position}</td>
                                <td>{props.date}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

    )
}

export default ExperienceList
