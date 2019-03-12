import data from "./data";

export default {
  parseXml: function (data) {
    const herdermap = {
      name: "Name",
      age: "Age",
      contact: "Contact",
      primary: "Primary",
      secondry: "Secondry",
      higher: "Higher",
      family: "Family",
      occupation: "Occupation",
      hobbies: "Hobbies",
      residence: "Residence",
      social: "Social",
      school: "School",
      college: "College",
      brothers: "Brothers",
      sisters: "Sisters",
      members: "Members",
      company: "Company",
      location: "Location",
      designation: "Designation",
      experience: "Experience",
      indoor: "Indoor",
      outdoor: "Outdoor",
      interest: "Interest",
      current: "Current",
      permanent: "Permanent",
      address: "Address",
      city: "City",
      state: "State",
      pin: "PIN",
      district: "District",
      github: "Github",
      youtube: "Youtube",
      stackoverflow: "Stackoverflow"
    };
    const headerTag =
      '<?xml version="1.0" encoding="UTF-8"?>\n' +
      "<DOCTYPE Profile Details>\n";
    let tag = "";
    for (let value in data) {
      let headerval =
        typeof data[value] !== "object"
          ? data[value]
          : this.getChildHeaders1(herdermap, data[value]);
      tag +=
        "\t <" +
        herdermap[value] +
        ">" +
        headerval +
        "</" +
        herdermap[value] +
        ">\t\n";
    }
    return headerTag + "<Profile>\n" + tag + "</Profile>";
  },
  getChildHeaders1: function (header, data) {
    let tag = "";
    if (data && Object.keys(data).length) {
      for (let value in data) {
        let headerval =
          typeof data[value] !== "object"
            ? data[value]
            : this.getChildHeaders2(header, data[value]);
        tag +=
          "\t\t\n <" +
          header[value] +
          ">" +
          headerval +
          "</" +
          header[value] +
          ">\t\t\n";
      }
    }
    return tag;
  },

  getChildHeaders2: function (header, data) {
    let tag = "";
    if (data && Object.keys(data).length) {
      for (let value in data) {
        let headerval = typeof data[value] !== "object" ? data[value] : "";
        tag +=
          "\t\t\t\n <" +
          header[value] +
          ">" +
          headerval +
          "</" +
          header[value] +
          ">\t\t\t\n";
      }
    }
    return tag;
  },

  blobxml: function () {
    var xml = this.parseXml(data);
    var data2 = new Blob([xml]);
    var a2 = document.createElement('a');
    a2.href = URL.createObjectURL(data2);
    a2.download = "xmlblob.xml"
    a2.click();
  }
};
