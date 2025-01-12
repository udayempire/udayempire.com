import { Inter, Michroma,Ubuntu,Bai_Jamjuree } from "next/font/google";
import localFont from 'next/font/local'

export const michroma = Michroma({
    weight: "400", 
    subsets: ["latin"], 
});

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    weight:"400",
})

export const ubuntu = Ubuntu({
    weight:"500",
    subsets:["latin"]

})
export const bai = Bai_Jamjuree({
    weight:"500",
    subsets:["latin"]

})


export const GeistMonoVF = localFont({
    src: './fonts/GeistMonoVF.woff',
    display: 'swap',
})
export const geistVF = localFont({
    src: './fonts/GeistVF.woff',
    display: 'swap',
})