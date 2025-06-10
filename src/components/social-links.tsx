import { Image, Link, ListItem, UnorderedList } from '@chakra-ui/react';
import emailLogoUrl from '../assets/email.png';
import githubLogoUrl from '../assets/github.png';
import linkedinLogoUrl from '../assets/linkedin.png';

const SocialLinks = () => (
	<UnorderedList spacing="0.6em" listStyleType="none" marginInlineStart="0">
		<ListItem display="inline-block" mr={4}>
			<Link href="https://www.linkedin.com/in/jack-b-a-davis" isExternal>
				<Image boxSize="20px" src={linkedinLogoUrl} alt="LinkedIn" />
			</Link>
		</ListItem>
		<ListItem display="inline-block" mr={4}>
			<Link href="https://github.com/jbadavis" isExternal>
				<Image boxSize="20px" src={githubLogoUrl} alt="GitHub" />
			</Link>
		</ListItem>
		<ListItem display="inline-block">
			<Link href="mailto:hello@jbadavis.dev">
				<Image boxSize="20px" src={emailLogoUrl} alt="GitHub" />
			</Link>
		</ListItem>
	</UnorderedList>
);

export default SocialLinks;
