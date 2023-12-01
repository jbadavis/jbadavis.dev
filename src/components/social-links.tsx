import {ListItem, UnorderedList, Image, Link} from '@chakra-ui/react';
import githubLogoUrl from '../assets/github.png';
import linkedinLogoUrl from '../assets/linkedin.png';

const SocialLinks = () => (
	<UnorderedList spacing="0.6em" listStyleType="none" marginInlineStart="0">
		<ListItem display="inline-block" mr={4}>
			<Link href="https://www.linkedin.com/in/jack-b-a-davis" isExternal>
				<Image boxSize="22px" src={linkedinLogoUrl} alt="LinkedIn" />
			</Link>
		</ListItem>
		<ListItem display="inline-block">
			<Link href="https://github.com/jbadavis" isExternal>
				<Image boxSize="22px" src={githubLogoUrl} alt="GitHub" />
			</Link>
		</ListItem>
	</UnorderedList>
);

export default SocialLinks;
