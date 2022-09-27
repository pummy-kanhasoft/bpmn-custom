import { SelectEntry, isSelectEntryEdited } from "@bpmn-io/properties-panel";
import { useService } from "bpmn-js-properties-panel";

// import hooks from the vendored preact package
import { useEffect, useState } from "@bpmn-io/properties-panel/preact/hooks";

export default function (element) {
  return [
    {
      id: "spell",
      element,
      component: Spell,
      isEdited: isSelectEntryEdited,
    },
  ];
}

function Spell(props) {
  const { element, id } = props;

  const modeling = useService("modeling");
  const translate = useService("translate");
  const debounce = useService("debounceInput");

  const getValue = () => {
    return element.businessObject.spell || "";
  };

  const setValue = (value) => {
    return modeling.updateProperties(element, {
      spell: value,
    });
  };

  const [spells, setSpells] = useState([
    { label: "form 1", value: "form1" },
    { label: "form 2", value: "form2" },
    { label: "form 3", value: "form3" },
    { label: "form 4", value: "form4" },
    { label: "form 5", value: "form5" },
  ]);

  // useEffect(() => {
  //   function fetchSpells() {
  //     fetch("http://localhost:1234/spell")
  //       .then((res) => res.json())
  //       .then((spellbook) => setSpells(spellbook))
  //       .catch((error) => console.error(error));
  //   }

  //   fetchSpells();
  // }, [setSpells]);

  const getOptions = () => {
    return [
      ...spells.map((spell) => ({
        label: spell,
        value: spell,
      })),
    ];
  };

  return (
    <SelectEntry
      id={id}
      element={element}
      description={translate("Apply a black magic spell")}
      label={translate("Spell")}
      getValue={getValue}
      setValue={setValue}
      getOptions={getOptions}
      debounce={debounce}
    />
  );
}
