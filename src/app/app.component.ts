import { Component } from '@angular/core';
import { TarefasNC, TarefasC } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listaTarefas';

  editando = null;
  titulo = null;
  descricao = null;
  data = null;

  tarefasNC = [
    new TarefasNC ('Ir pra Miracema','tenho que ir em miraceman resolver umas coisas', 'dia 21/10/20'),
    new TarefasNC ('Ir pra Palmas','tenho que ir em Palmas resolver umas coisas', 'dia 22/10/20'),
  ];
  tarefasC = [
    new TarefasC ('Ir pra Paraiso','tenho que ir em Paraiso resolver umas coisas', 'dia 22/10/20'),
  ];

  salvar(){
    if(this.editando) {
      this.editando.titulo = this.titulo;
      this.editando.descricao = this.descricao;
      this.editando.data = this.data;
    } else {
      const f = new TarefasNC(this.titulo, this.descricao, this.data);
      this.tarefasNC.push(f);
    }
    this.titulo = null;
    this.descricao = null;
    this.data = null;
    this.editando = null;
  }

  editar(item){
    this.titulo = item.titulo;
    this.descricao = item.descricao;
    this.data = item.data;
    this.editando = item;
  }

  cancelar(){
    this.titulo = null;
    this.descricao = null;
    this.data = null;
    this.editando = null;
  }


  concluir(item){
    if( this.editando == item){
      alert('Você não pode concluir um item que esta sendo editado');
    } else {
      const c = new TarefasC(item.titulo, item.descricao, item.data);
      this.tarefasC.push(c);
      let i = this.tarefasNC.indexOf(item);
      this.tarefasNC.splice(i, 1);
    }
  }


  excluirNC(item){
    if (this.editando == item){
      alert('Você não pode excluir um item que esta sendo editado');
    } else {
      if(confirm('Tem certeza que deseja excluir : ' + item.titulo + ' da lista de tarefas?')){
        let i = this.tarefasNC.indexOf(item);
        this.tarefasNC.splice(i, 1);
      };
    }
  }


  excluirC(item){
    if (this.editando == item){
      alert('Você não pode excluir um item que esta sendo editado');
    } else {
      if(confirm('Tem certeza que deseja excluir : ' + item.titulo + ' da lista de tarefas?')){
        let i = this.tarefasC.indexOf(item);
        this.tarefasC.splice(i, 1);
      };
    }
  }
}
