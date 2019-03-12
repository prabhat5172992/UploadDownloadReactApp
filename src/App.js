import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import update from 'immutability-helper';
import { getBase64, base64ToArrayBuffer, saveByteArray } from './helpers';
import Divider from 'material-ui/Divider';
import parser from './xmlParser';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fileName: "",
      fileErr: "",
      fileObject: null,
      fileList: [],
      fileObjectList: [],
      fileBase64: []
    }
    this.fileUpload = this.fileUpload.bind(this);
    this.downloadFile = this.downloadFile.bind(this);
  }

  fileUpload(event) {
    const files = [...event.target.files];
    const ext = files[0].name.split('.')[files[0].name.split('.').length - 1];
    const isFileValid = this.validateFile(files[0], ext);
    const fileName = files[0].name;
    const fileObject = files[0];
    (isFileValid) ?
      this.setState({
        fileName,
        fileObject,
        fileList: update(this.state.fileList, { $push: [fileName] }),
        fileObjectList: update(this.state.fileObjectList, { $push: [files[0]] })

      }) :
      this.setState({ fileName: "", fileObject: null });
    let response = getBase64(files[0]);
    response.then(data => {
      try {
        if (data) {
          this.setState({ fileBase64: update(this.state.fileBase64, { $push: [{ name: fileName, value: data }] }) });
        }
        else alert("Promise Pending!!");
      }
      catch (err) {
        alert("An error occured", err);
      }
    });
    event.target.value = "";
  }

  downloadFile(event) {
    const fileName = event.target.text.trim();
    let fileBase64 = this.state.fileBase64.find(item => item.name === fileName);
    if (fileBase64 && fileBase64.value) {
      const base64 = fileBase64.value.split(",")[1];
      const sampleArr = base64ToArrayBuffer(base64);
      saveByteArray(fileName, sampleArr);
    }
    else {
      alert("Promise is not resolved!!");
    }
  }

  validateFile(file, ext) {
    if (file.size >= 41943040) {
      this.setState({ fileErr: "File size cannot exceed 40mb." });
      return false;
    }
    else if ((ext !== "txt" && ext !== "TXT") && (ext !== "docx" && ext !== "DOCX") && (ext !== "doc" && ext !== "DOC") && (ext !== "pdf" && ext !== "PDF")) {
      this.setState({ fileErr: "Fis is not suported." });
      return false;
    }
    else {
      this.setState({ fileErr: "" });
      return true;
    }
  }

  render() {
    const styles = { marginLeft: "30px", marginTop: "10px" }
    const style = { margin: 12 }
    console.log("FileList", this.state.fileList, this.state.fileObjectList);
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <TextField
              floatingLabelText="Upload File..."
              style={styles}
              value={this.state.fileName}
              errorText={this.state.fileErr}
            />
            <RaisedButton
              label="Upload"
              primary
              style={style}
            >
              <input
                type="file"
                style={{ width: 100, height: 35, opacity: 0, position: "absolute", left: 0, top: 0, cursor: "pointer", zIndex: 100 }}
                onChange={this.fileUpload}
                data-default-file=""
                value={null}
              />
            </RaisedButton>
          </div>
          <div>
            <ul>
              {this.state.fileList.length ?
                //eslint-disable-next-line
                this.state.fileList.map(item => { return (<li> <a href={"javascript:void(0)"} onClick={(event) => this.downloadFile(event)}>{item} </a></li>) }) :
                null}
            </ul>
          </div>
          <Divider />
          <div>
            <ul>
              {/*eslint-disable-next-line*/}
              <li><a href={"javascript:void(0)"} onClick={(event) => parser.blobxml(event)}>Download xml (via Blob)</a></li>
            </ul>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
