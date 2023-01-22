import LinkSocialMedia from './LinkSocialMedia';
import Styles from './styles.module.scss';

const MainFooter = () => {

    const redes = [
        {
            link: 'https://www.linkedin.com/in/ciog',
            linkImg: "https://i.ibb.co/nLxLLtd/linkedin.png",
            alt: "LinkedIn"
        },
        {
            link: 'https://github.com/CIOG2',
            linkImg: "https://i.ibb.co/1RQsbkg/github.png",
            alt: "Github"
        },
        {
            link: 'https://discord.gg/vCqdaZTjw2',
            linkImg: "https://i.ibb.co/9rML6wG/discord.png",
            alt: "Discord"
        },
        {
            link: 'https://www.instagram.com/ciog_2/',
            linkImg: "https://i.ibb.co/W6Ty3yj/instagram.png",
            alt: "Instagram"
        },
        // {
        //     link: '',
        //     linkImg: "https://i.ibb.co/cT8S9JJ/twiter.png",
        //     alt: "Twitter"
        // },
    ]

    return (
        <main className = {Styles['main']}>
            <section className = {Styles['main__title']}>
                <h3 className = {Styles['title']}
                >
                    {'<CIOG/>'}
                </h3>
            </section>
            <section className = {Styles['main__socialMedia']}>
                {redes.map((item, index) => 
                    <LinkSocialMedia
                        link = {item.link}
                        linkImg = {item.linkImg}
                        alt = {item.alt}
                        key  ={index}
                    />
                )}
            </section>
        </main>
    );
}
 
export default MainFooter;