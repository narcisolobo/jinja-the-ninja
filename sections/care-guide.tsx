import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
import { List, ListItem } from "flowbite-react";

function CareGuideSection() {
  return (
    <section id="care" className="bg-gray-300 font-sans dark:bg-gray-700">
      <div className="px-4 py-16 md:container md:mx-auto">
        <h1 className="font-display mb-8 max-w-2xl text-4xl leading-none md:text-5xl xl:text-6xl dark:text-gray-100">
          Care Guide
        </h1>

        <Accordion>
          <AccordionPanel>
            <AccordionTitle>Feeding Instructions</AccordionTitle>
            <AccordionContent className="bg-gray-100 dark:bg-gray-800">
              <p className="mb-2 text-gray-900 dark:text-gray-100">
                Jinja is a <em>very</em> picky eater.
              </p>
              <p className="mb-2 text-gray-900 dark:text-gray-100">
                Every meal is the same &ndash; one (1) cup of kibble and about
                an ounce to an ounce and a half of poached chicken.
              </p>
              <p className="mb-2 text-gray-900 dark:text-gray-100">
                <strong>NOTE:</strong> She may not eat any of the kibble during
                her meals, but she'll most likely eat some of it during the
                night.
              </p>
              <p className="text-gray-900 dark:text-gray-100">
                <strong>Jinja loves her treats, though!</strong> Just make sure
                she sits before giving her one.
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle>Walk Routine</AccordionTitle>
            <AccordionContent className="bg-gray-100 dark:bg-gray-800">
              <p className="text-gray-900 dark:text-gray-100">
                <strong>Walk Durations:</strong>
              </p>
              <List className="mb-4 ml-4 text-gray-900 dark:text-gray-100">
                <ListItem>
                  Each potty walk is about 15 - 20 minutes long.
                </ListItem>
                <ListItem>Her long walk is at least 60 minutes long.</ListItem>
              </List>
              <p className="text-gray-900 dark:text-gray-100">
                <strong>Behavior:</strong>
              </p>
              <p className="mb-2 text-gray-900 dark:text-gray-100">
                Jinja is a curious dog. She will want to stop and sniff
                everything. She's not a puller at all.
              </p>
              <p className="mb-2 text-gray-900 dark:text-gray-100">
                She will want to meet many of the people you pass. Use your best
                judgment here.
              </p>
              <p className="mb-2 text-gray-900 dark:text-gray-100">
                Certain people just catch her eye. When this happens, she will
                refuse to move and sit down until they pet her or you say,{" "}
                <strong>"Focus"</strong> (She will expect a treat).
              </p>
              <p className="mb-2 text-gray-900 dark:text-gray-100">
                She will want to play with friendly dogs. Jinja will get down on
                her tummy if she really wants to play with one. Use your best
                judgment here.
              </p>
              <p className="text-gray-900 dark:text-gray-100">
                Certain dogs will make her bark. <strong>"Focus"</strong> might
                work in these cases. In extreme cases, just pick her up and
                she'll stop.
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle>Play & Enrichment</AccordionTitle>
            <AccordionContent className="bg-gray-100 dark:bg-gray-800">
              <p className="mb-2 text-gray-900 dark:text-gray-100">
                Jinja loves to play keep-away and fetch with her stuffed animal
                toys inside the house.
              </p>
              <p className="mb-2 text-gray-900 dark:text-gray-100">
                Outside the house, she loves to play fetch with a tennis ball.
              </p>
              <p className="text-gray-900 dark:text-gray-100">
                She also loves to please people and show off her many tricks!
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle>Health Info</AccordionTitle>
            <AccordionContent className="bg-gray-100 dark:bg-gray-800">
              <p className="mb-2 text-gray-900 dark:text-gray-100">
                Jinja has no medications and no allergies that we know of.
              </p>
              <p className="text-gray-900 dark:text-gray-100">
                She loves to bite her right hip for some reason.
              </p>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
    </section>
  );
}

export default CareGuideSection;
