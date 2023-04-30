import { readFile } from "fs";
// MiddleWare qui va chercher les données dans un fichier de datas

export default (req, res, next) => {
  readFile("src/data/product.json", "utf8", (error, data) => {
    if (error) {
      console.log("aiaiaiai error caramba !");
      res.end;
      next();
      return;
    }

    res.locals.datas = JSON.parse(data);
    res.end;
    next();
    return;
  });
};
