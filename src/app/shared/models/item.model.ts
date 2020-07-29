export class Item {
  public id?: string;
  public name?: String;
  public description?: string;
  public link?: string;
  public originalLink?: string;
  public createdDate?: Date;
  public createdBy?: string;
  public boughtDate?: Date;
  public price?: string;

  fromJson(jsonData: any): Item {
    return Object.assign(new Item(), jsonData);
  }
}
