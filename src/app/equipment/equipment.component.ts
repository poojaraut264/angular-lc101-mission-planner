import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  memberBeingEdited: object = null;
  equipments: object[] = [
    {name: "Habitat dome"},
    {name: "Drones"},
    {name: "Food containers"},
    {name: "Oxygen tank"}  
  ];

  constructor() { }

  ngOnInit() {
  }

  add(memberName: string) {
    this.equipments.push({name: memberName});
  }
  
  remove(member: object) {
    let index = this.equipments.indexOf(member);
    this.equipments.splice(index, 1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
  }

  save(name: string, member: object) {
    member['name'] = name;
    this.memberBeingEdited = null;
  }

}
