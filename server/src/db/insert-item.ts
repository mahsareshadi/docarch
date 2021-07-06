import * as dbquery from "./dbquery";
//const mysql = require('mysql');

const query = dbquery.query;

function insertIN() {
  const sql: string = "INSERT INTO user (username,password,firstname,lastname) VALUES ? ";
  const value: any[] = [
    ["mahsareshadi", 123456789, "Mahsa", "Reshadi"],
    ["minooathari", 123456789, "Minoo", "Athari"],
    ["aliahmadi", 123456789, "Ali", "Ahmadi"],
    ["maryam_moradi", 123456789, "Maryan", "Moradi"],
    ["mahsa.ziarati", 123456789, "Mahsa", "Ziarati"],
    ["sedighzia", 123456789, "Sedigh", "Zia"],
    ["alireza_zamani", 123456789, "Alireza", "Zamani"],
    ["shaghayegh-af", 123456789, "Shaghayegh", "Afif"],
    ["mina_ngh", 123456789, "Mina", "Naghshineh"],
    ["alireshadi", 123456789, "Ali", "Reshadi"]
  ]
  //insert one item in user table
  query(sql, [value]);
}
insertIN();