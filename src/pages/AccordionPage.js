import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "dascc",
      label: "Can I use React on a project?",
      content:
        "You can use React on any project you want. React is a powerfull framework.",
    },
    {
      id: "acvrc",
      label: "Can I use React on a project?",
      content:
        "You can use React on any project you want. React is a powerfull framework.",
    },
    {
      id: "crbtn",
      label: "Can I use React on a project?",
      content:
        "You can use React on any project you want. React is a powerfull framework.",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
