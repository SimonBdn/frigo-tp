export default class Aliment{
  constructor(AlimentJSON){
    this._id = AlimentJSON.id
    this._nom = AlimentJSON.nom
    this._qte = AlimentJSON.qte
    this._photo = AlimentJSON.photo ?? ""
  }

  get id() {
    return this._id
  }
  get nom(){
    return this._nom
  }
  get qte(){
    return this._qte
  }
  get photo(){
    return this._photo
  }



}
