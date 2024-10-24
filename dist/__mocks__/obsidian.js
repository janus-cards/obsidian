import { jest } from "@jest/globals";
// Mock TAbstractFile
export class TAbstractFile {
    constructor(path) {
        this.path = path;
    }
}
export class Vault {
    constructor() {
        this.on = jest.fn();
    }
}
export class Workspace {
    constructor() {
        this.on = jest.fn();
    }
}
// Mock other commonly used Obsidian APIs as needed
export const Notice = jest.fn();
export const MarkdownView = jest.fn();
export const TFile = jest
    .fn()
    .mockImplementation((path) => new TAbstractFile(path));
// Add any other Obsidian classes or functions you need to mock
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzaWRpYW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvX19tb2Nrc19fL29ic2lkaWFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHckMscUJBQXFCO0FBQ3JCLE1BQU0sT0FBTyxhQUFhO0lBRXpCLFlBQVksSUFBWTtRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNsQixDQUFDO0NBQ0Q7QUFFRCxNQUFNLE9BQU8sS0FBSztJQUFsQjtRQUNDLE9BQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDaEIsQ0FBQztDQUFBO0FBQ0QsTUFBTSxPQUFPLFNBQVM7SUFBdEI7UUFDQyxPQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ2hCLENBQUM7Q0FBQTtBQUlELG1EQUFtRDtBQUNuRCxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO0FBQ2hDLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7QUFDdEMsTUFBTSxDQUFDLE1BQU0sS0FBSyxHQUFHLElBQUk7S0FDdkIsRUFBRSxFQUFFO0tBQ0osa0JBQWtCLENBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFFaEUsK0RBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgamVzdCB9IGZyb20gXCJAamVzdC9nbG9iYWxzXCI7XG5pbXBvcnQgeyBBcHAgYXMgQXBwVHlwZSB9IGZyb20gXCIuL29ic2lkaWFuLW1vY2svYXBwXCI7XG5cbi8vIE1vY2sgVEFic3RyYWN0RmlsZVxuZXhwb3J0IGNsYXNzIFRBYnN0cmFjdEZpbGUge1xuXHRwYXRoOiBzdHJpbmc7XG5cdGNvbnN0cnVjdG9yKHBhdGg6IHN0cmluZykge1xuXHRcdHRoaXMucGF0aCA9IHBhdGg7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFZhdWx0IHtcblx0b24gPSBqZXN0LmZuKCk7XG59XG5leHBvcnQgY2xhc3MgV29ya3NwYWNlIHtcblx0b24gPSBqZXN0LmZuKCk7XG59XG5cbmV4cG9ydCB0eXBlIEFwcCA9IEFwcFR5cGU7XG5cbi8vIE1vY2sgb3RoZXIgY29tbW9ubHkgdXNlZCBPYnNpZGlhbiBBUElzIGFzIG5lZWRlZFxuZXhwb3J0IGNvbnN0IE5vdGljZSA9IGplc3QuZm4oKTtcbmV4cG9ydCBjb25zdCBNYXJrZG93blZpZXcgPSBqZXN0LmZuKCk7XG5leHBvcnQgY29uc3QgVEZpbGUgPSBqZXN0XG5cdC5mbigpXG5cdC5tb2NrSW1wbGVtZW50YXRpb24oKHBhdGg6IHN0cmluZykgPT4gbmV3IFRBYnN0cmFjdEZpbGUocGF0aCkpO1xuXG4vLyBBZGQgYW55IG90aGVyIE9ic2lkaWFuIGNsYXNzZXMgb3IgZnVuY3Rpb25zIHlvdSBuZWVkIHRvIG1vY2tcbiJdfQ==