import { Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";

const ExperienceLinks = () => (
	<>
		<Text>
			I've previously worked for{" "}
			<Link href="https://red-badger.com" isExternal>
				Red Badger
			</Link>
			,{" "}
			<Link href="https://www.akqa.com/" isExternal>
				AKQA
			</Link>{" "}
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
					Nando's Delivery.
				</Link>
			</ListItem>
			<ListItem>
				<Link href="https://www.fosterandpartners.com/" isExternal>
					Foster + Partners.
				</Link>
			</ListItem>
		</UnorderedList>
	</>
);

export default ExperienceLinks;
