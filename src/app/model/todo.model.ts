export class TODO {
	public id : number ;
	public title : string ;
	public description : string ;
	public type : string = 'action';
	public eta : any ; // This is a date
	public creationDate : any ; // This is a date
	public closureDate : any ; // This is a date
	public tags : string[] ;
	public attachements : string[] ;
	public user : string ;
	public status : string = 'pending';
	public important : boolean ;
}