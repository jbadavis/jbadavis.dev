import {
	Heading,
	Divider,
	Text,
	Link,
	ListItem,
	UnorderedList,
	VStack,
} from '@chakra-ui/react';

function App() {
	return (
		<VStack
			spacing="1em"
			align="flex-start"
			justify="center"
			h="100vh"
			w="80%"
			m="0 auto"
			maxW="600px"
		>
			<Heading letterSpacing="wide" textTransform="uppercase">
				Jack Davis
			</Heading>
			<Divider borderColor="black" w="50%" />
			<Text>
				I'm a London-based developer working at{' '}
				<Link href="https://planes.studio" isExternal>
					Planes ✈️
				</Link>
				.
			</Text>
			<Text>
				I've previously worked for{' '}
				<Link href="https://planes.studio" isExternal>
					Red Badger
				</Link>
				,{' '}
				<Link href="https://planes.studio" isExternal>
					AKQA
				</Link>{' '}
				and on sites including:
			</Text>
			<UnorderedList spacing="0.6em">
				<ListItem>
					<Link href="https://dis-loyalty.com/" isExternal>
						Dis-Loyalty.
					</Link>
				</ListItem>
				<ListItem>
					<Link href="https://www.nandos.co.uk/order/search" isExternal>
						Nando's Delievery.
					</Link>
				</ListItem>
				<ListItem>
					<Link href="https://www.fosterandpartners.com/" isExternal>
						Foster + Partners.
					</Link>
				</ListItem>
			</UnorderedList>
		</VStack>
	);
}

export default App;
