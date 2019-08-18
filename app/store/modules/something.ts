import { Action, Module, Mutation, VuexModule, getModule } from 'vuex-module-decorators';
import { store } from '~/store';

export interface SomethingState {
  some: string;
  thing: number;
}

@Module({ dynamic: true, namespaced: true, name: 'property', store })
class SomethingModule extends VuexModule implements SomethingState {
  public some = '';
  public thing = 0;

  public get getSome(): string {
    return this.some;
  }

  public get getThing(): number {
    return this.thing;
  }

  @Mutation
  public setSome(some: string): void {
    this.some = some;
  }

  @Mutation
  public setThing(thing: number): void {
    this.thing = thing;
  }

  @Action({ commit: 'setSome' })
  public async updateSome(some: string): Promise<string> {
    return some;
  }

  @Action({ commit: 'setThing' })
  public async updateThing(thing: number): Promise<number> {
    return thing;
  }
}

export const something = getModule(SomethingModule);
