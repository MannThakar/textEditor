import {
  RichTextEditorComponent,
  Toolbar,
  Link,
  Table,
  Image,
  HtmlEditor,
  Inject,
  QuickToolbar,
  EmojiPicker,
} from "@syncfusion/ej2-react-richtexteditor";
import "./index.css";
const App = () => {
  const customToolbarSettings = {
    items: [
      "Bold",
      "Italic",
      "Underline",
      "Undo",
      "Redo",
      "Image",
      "CreateLink",
      "FontName",
      "FontSize",
      "EmojiPicker",
    ],
  };
  let fontFamily = {
    items: [
      { text: "Segoe UI", value: "Segoe UI" },
      { text: "Arial", value: "Arial,Helvetica,sans-serif" },
      { text: "Courier New", value: "Courier New,Courier,monospace" },
      { text: "Georgia", value: "Georgia,serif" },
      { text: "Impact", value: "Impact,Charcoal,sans-serif" },
      { text: "Calibri Light", value: "CalibriLight" },
    ],
    width: "60px",
  };
  let fontSize = {
    items: [
      { text: "8", value: "8pt" },
      { text: "10", value: "10pt" },
      { text: "12", value: "12pt" },
      { text: "14", value: "14pt" },
      { text: "16", value: "16pt" },
      { text: "18", value: "18pt" },
      { text: "42", value: "42pt" },
    ],
    width: "40px",
  };

  let EmojiPicker = {
    iconsSet: [{name: 'Smilies & People', code: '1F600', iconCss: 'e-emoji', 
      icons: [{ code: '1F600', desc: 'Grinning face' },
      { code: '1F603', desc: 'Grinning face with big eyes' },
      { code: '1F604', desc: 'Grinning face with smiling eyes' },
      { code: '1F606', desc: 'Grinning squinting face' },
      { code: '1F605', desc: 'Grinning face with sweat' },
      { code: '1F602', desc: 'Face with tears of joy' },
      { code: '1F923', desc: 'Rolling on the floor laughing' },
      { code: '1F60A', desc: 'Smiling face with smiling eyes' }]
      }, {
      name: 'Animals & Nature', code: '1F435', iconCss: 'e-animals',
      icons: [{ code: '1F436', desc: 'Dog face' },
      { code: '1F431', desc: 'Cat face' },
      { code: '1F42D', desc: 'Mouse face' },
      { code: '1F439', desc: 'Hamster face' },
      { code: '1F430', desc: 'Rabbit face' },
      { code: '1F98A', desc: 'Fox face' }]
      }, {
      name: 'Food & Drink', code: '1F347', iconCss: 'e-food-and-drinks',
      icons: [{ code: '1F34E', desc: 'Red apple' },
      { code: '1F34C', desc: 'Banana' },
      { code: '1F347', desc: 'Grapes' },
      { code: '1F353', desc: 'Strawberry' },
      { code: '1F35E', desc: 'Bread' },
      { code: '1F950', desc: 'Croissant' },
      { code: '1F955', desc: 'Carrot' },
      { code: '1F354', desc: 'Hamburger' }]
      }, {
      name: 'Activities', code: '1F383', iconCss: 'e-activities',
      icons: [{ code: '26BD', desc: 'Soccer ball' },
      { code: '1F3C0', desc: 'Basketball' },
      { code: '1F3C8', desc: 'American football' },
      { code: '26BE', desc: 'Baseball' },
      { code: '1F3BE', desc: 'Tennis' },
      { code: '1F3D0', desc: 'Volleyball' },
      { code: '1F3C9', desc: 'Rugby football' }]
      }, {
      name: 'Travel & Places', code: '1F30D', iconCss: 'e-travel-and-places',
      icons: [{ code: '2708', desc: 'Airplane' },
      { code: '1F697', desc: 'Automobile' },
      { code: '1F695', desc: 'Taxi' },
      { code: '1F6B2', desc: 'Bicycle' },
      { code: '1F68C', desc: 'Bus' }]
      }, {
      name: 'Objects', code: '1F507', iconCss: 'e-objects', icons: [{ code: '1F4A1', desc: 'Light bulb' },
      { code: '1F526', desc: 'Flashlight' },
      { code: '1F4BB', desc: 'Laptop computer' },
      { code: '1F5A5', desc: 'Desktop computer' },
      { code: '1F5A8', desc: 'Printer' },
      { code: '1F4F7', desc: 'Camera' },
      { code: '1F4F8', desc: 'Camera with flash' },
      { code: '1F4FD', desc: 'Film projector' }]
      }, {
      name: 'Symbols', code: '1F3E7', iconCss: 'e-symbols', icons: [{ code: '274C', desc: 'Cross mark' },
      { code: '2714', desc: 'Check mark' },
      { code: '26A0', desc: 'Warning sign' },
      { code: '1F6AB', desc: 'Prohibited' },
      { code: '2139', desc: 'Information' },
      { code: '267B', desc: 'Recycling symbol' },
      { code: '1F6AD', desc: 'No smoking' }]
      }],
      width: "40px",
  };

  return (
    <div className=" h-svh bg-[#d8ebf0] p-1">
      <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-xl">
        <div className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight text-[#0e6b7d] ">
            EDITOR
          </h1>
        </div>
        <div className="w-full h-auto">
          <RichTextEditorComponent
            toolbarSettings={customToolbarSettings}
            fontFamily={fontFamily}
            fontSize={fontSize}
            emojiPicker={EmojiPicker}
          >
            <input
              type="text"
              placeholder="Enter the text"
              className="max-w-full"
            />
            <Inject services={[Toolbar, Link, Image, HtmlEditor, Table]} />
          </RichTextEditorComponent>
        </div>
      </div>
    </div>
  );
};

export default App;
