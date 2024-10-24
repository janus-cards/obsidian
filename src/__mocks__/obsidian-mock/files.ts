export abstract class TAbstractFile {
	path: string;
	name: string;

	constructor(path: string) {
		this.path = path;
		this.name = path.split("/").pop()!;
	}
}
export class TFolder extends TAbstractFile {}
export class TFile extends TAbstractFile {}
