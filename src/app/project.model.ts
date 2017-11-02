export class Project {
  constructor(
    public name: string,
    public projectManagers: string[],
    public description: string,
    public goal: number,
    public fundsRaised: string,
    public intention: number) {}
}
