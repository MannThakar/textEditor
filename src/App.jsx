import {
  RichTextEditorComponent,
  Toolbar,
  Link,
  Table,
  Image,
  HtmlEditor,
  Inject
} from '@syncfusion/ej2-react-richtexteditor';
import './index.css';
const App = () => {
  

  const customToolbarSettings = {
    items: ['Bold', 'Italic', 'Undo', 'Redo', 'CreateTable', 'Image', 'CreateLink']
  };


  return (

    <div>
      <RichTextEditorComponent
        toolbarSettings={customToolbarSettings}
      >
        <p>
          Hey heli Good morning ! You are prettiest 
        </p>
        <Inject services={[Toolbar, Link, Image, HtmlEditor, Table]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default App;
