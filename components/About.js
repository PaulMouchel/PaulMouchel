import Section from "./Section";
import Title from "./Title";
import P from './P'
import Button from "./Button";
import Link from "next/link";

const About = () => {
    return (
        <Section className="flex-col" id="about">
            <Title>A propos de moi</Title>
            <P className="max-w-lg">Si vous voulez en savoir un peu plus sur qui je suis, mes centres d'intérêts, mes hobbies.</P>
            <Link href="/about">
                <a>
                    <Button>
                        En savoir plus ?
                    </Button>
                </a>
            </Link>
        </Section>
    )
}

export default About;