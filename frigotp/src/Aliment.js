export default class Aliment{
  constructor(id, nom, qte, photo,max_qte){
    this._id = id
    this._nom = nom
    this._qte = qte
    this._photo = photo ?? ""
    this._max_qte = max_qte ?? qte
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

  get max_qte(){
    return this._max_qte
  }

}
