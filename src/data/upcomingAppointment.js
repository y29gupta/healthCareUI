import teeth from "../assets/teeth.png"
import strong from "../assets/strong.png"
import vaccine from "../assets/vaccine.png"
import eye from "../assets/eye.png"
import heart from "../assets/heart.png"
import doc from "../assets/doc.png"

export const appointment=[
    {
        appointment:"Dentist",
        logo:teeth,
        time:"09:00-11:00",
        doctor:"Dr. Cameroon williamson",
        cssClass:"dentistCard"

    },
     {
        appointment:"physiotheropy Appoinment",
        logo:strong,
        time:"11:00-12:00",
        doctor:"Dr. Kevin Djones",
        cssClass:"physioCard"

    },
]
export const upcomingSchedule=[
    {
        appointment:"Health checkup complete",
        time:"11:00 AM",
        logo:vaccine,
        cssClass:"health"
    },
    {
        appointment:"Ophthalmologist",
        time:"11:00 AM",
        logo:eye,
        cssClass:"ophtha"
    }
]
export const otherSchedule=[
    {
        appointment:"Cardiologist",
        time:"12:00 AM",
        logo:heart,
        cssClass:"cardio"
    },
    {
        appointment:"Neorologist",
        time:"11:00 AM",
        logo:doc,
        cssClass:"neoro"
    }
]