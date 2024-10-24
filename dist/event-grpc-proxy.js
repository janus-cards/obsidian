import EventWatcher from "./event-watcher";
import { CreateEvent, DeleteEvent, RenameEvent, ModifyEvent, FileOpenEvent, ObsidianEventStreamClient, ObsidianEvent, } from "@/proto/obsidan-events";
export class EventGrpcProxy extends EventWatcher {
    constructor(plugin, grpc_config) {
        super(plugin);
        this.initEventStream(grpc_config);
    }
    close() {
        if (this.stream) {
            this.stream.end();
        }
        if (this.client) {
            this.client.close();
        }
    }
    initEventStream(grpc_config) {
        this.client = new ObsidianEventStreamClient(grpc_config.address, grpc_config.credentials);
        this.stream = this.client.streamEvents((err, value) => {
            if (err) {
                console.error(err);
            }
        });
    }
    sendRequest(name, event) {
        // Get timestamp
        const timestamp = Date.now();
        // Create request
        const obsidianEvent = new ObsidianEvent({ timestamp, [name]: event });
        // Send request
        this.stream.write(obsidianEvent);
    }
    onCreate(file) {
        const event = new CreateEvent({ filePath: file.path });
        this.sendRequest("create", event);
    }
    onDelete(file) {
        const event = new DeleteEvent({ filePath: file.path });
        this.sendRequest("delete", event);
    }
    onRename(file, oldPath) {
        const event = new RenameEvent({
            newPath: file.path,
            oldPath,
        });
        this.sendRequest("rename", event);
    }
    onModify(file) {
        const event = new ModifyEvent({ filePath: file.path });
        this.sendRequest("modify", event);
    }
    onFileOpen(file) {
        // Only send event if file is not null
        // I believe null file means it has been closed but not sure.
        if (file) {
            const event = new FileOpenEvent({ filePath: file.path });
            this.sendRequest("file_open", event);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtZ3JwYy1wcm94eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9ldmVudC1ncnBjLXByb3h5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sWUFBWSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTixXQUFXLEVBQ1gsV0FBVyxFQUNYLFdBQVcsRUFDWCxXQUFXLEVBQ1gsYUFBYSxFQUNiLHlCQUF5QixFQUN6QixhQUFhLEdBQ2IsTUFBTSx3QkFBd0IsQ0FBQztBQW1CaEMsTUFBTSxPQUFPLGNBQWUsU0FBUSxZQUFZO0lBSS9DLFlBQVksTUFBYyxFQUFFLFdBQXVCO1FBQ2xELEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELEtBQUs7UUFDSixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNsQjtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3BCO0lBQ0YsQ0FBQztJQUVPLGVBQWUsQ0FBQyxXQUF1QjtRQUM5QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUkseUJBQXlCLENBQzFDLFdBQVcsQ0FBQyxPQUFPLEVBQ25CLFdBQVcsQ0FBQyxXQUFXLENBQ3ZCLENBQUM7UUFFRixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3JELElBQUksR0FBRyxFQUFFO2dCQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbkI7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFTyxXQUFXLENBQ2xCLElBQVUsRUFDVixLQUFnQztRQUVoQyxnQkFBZ0I7UUFDaEIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzdCLGlCQUFpQjtRQUNqQixNQUFNLGFBQWEsR0FBRyxJQUFJLGFBQWEsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDdEUsZUFBZTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFUyxRQUFRLENBQUMsSUFBbUI7UUFDckMsTUFBTSxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVTLFFBQVEsQ0FBQyxJQUFtQjtRQUNyQyxNQUFNLEtBQUssR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRVMsUUFBUSxDQUFDLElBQW1CLEVBQUUsT0FBZTtRQUN0RCxNQUFNLEtBQUssR0FBRyxJQUFJLFdBQVcsQ0FBQztZQUM3QixPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDbEIsT0FBTztTQUNQLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFUyxRQUFRLENBQUMsSUFBbUI7UUFDckMsTUFBTSxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVTLFVBQVUsQ0FBQyxJQUEwQjtRQUM5QyxzQ0FBc0M7UUFDdEMsNkRBQTZEO1FBQzdELElBQUksSUFBSSxFQUFFO1lBQ1QsTUFBTSxLQUFLLEdBQUcsSUFBSSxhQUFhLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDckM7SUFDRixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbHVnaW4sIFRBYnN0cmFjdEZpbGUgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCBFdmVudFdhdGNoZXIgZnJvbSBcIi4vZXZlbnQtd2F0Y2hlclwiO1xuaW1wb3J0IHtcblx0Q3JlYXRlRXZlbnQsXG5cdERlbGV0ZUV2ZW50LFxuXHRSZW5hbWVFdmVudCxcblx0TW9kaWZ5RXZlbnQsXG5cdEZpbGVPcGVuRXZlbnQsXG5cdE9ic2lkaWFuRXZlbnRTdHJlYW1DbGllbnQsXG5cdE9ic2lkaWFuRXZlbnQsXG59IGZyb20gXCJAL3Byb3RvL29ic2lkYW4tZXZlbnRzXCI7XG5pbXBvcnQgeyBDaGFubmVsQ3JlZGVudGlhbHMsIENsaWVudFdyaXRhYmxlU3RyZWFtIH0gZnJvbSBcIkBncnBjL2dycGMtanNcIjtcblxudHlwZSBHcnBjQ29uZmlnID0ge1xuXHRhZGRyZXNzOiBzdHJpbmc7XG5cdGNyZWRlbnRpYWxzOiBDaGFubmVsQ3JlZGVudGlhbHM7XG59O1xuXG4vKlxuICBGb3IgYWxsIGV2ZW50cyBsaXN0ZW5lZCB0bywgZm9yd2FyZCB0aGVzZSBvbiB2aWEgZ3JwY1xuKi9cbnR5cGUgRXZlbnROYW1lVG9Qcm90b01hcCA9IHtcblx0Y3JlYXRlOiBDcmVhdGVFdmVudDtcblx0ZGVsZXRlOiBEZWxldGVFdmVudDtcblx0cmVuYW1lOiBSZW5hbWVFdmVudDtcblx0bW9kaWZ5OiBNb2RpZnlFdmVudDtcblx0ZmlsZV9vcGVuOiBGaWxlT3BlbkV2ZW50O1xufTtcblxuZXhwb3J0IGNsYXNzIEV2ZW50R3JwY1Byb3h5IGV4dGVuZHMgRXZlbnRXYXRjaGVyIHtcblx0cHJpdmF0ZSBjbGllbnQ6IE9ic2lkaWFuRXZlbnRTdHJlYW1DbGllbnQ7XG5cdHByaXZhdGUgc3RyZWFtOiBDbGllbnRXcml0YWJsZVN0cmVhbTxPYnNpZGlhbkV2ZW50PjtcblxuXHRjb25zdHJ1Y3RvcihwbHVnaW46IFBsdWdpbiwgZ3JwY19jb25maWc6IEdycGNDb25maWcpIHtcblx0XHRzdXBlcihwbHVnaW4pO1xuXHRcdHRoaXMuaW5pdEV2ZW50U3RyZWFtKGdycGNfY29uZmlnKTtcblx0fVxuXG5cdGNsb3NlKCkge1xuXHRcdGlmICh0aGlzLnN0cmVhbSkge1xuXHRcdFx0dGhpcy5zdHJlYW0uZW5kKCk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmNsaWVudCkge1xuXHRcdFx0dGhpcy5jbGllbnQuY2xvc2UoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGluaXRFdmVudFN0cmVhbShncnBjX2NvbmZpZzogR3JwY0NvbmZpZykge1xuXHRcdHRoaXMuY2xpZW50ID0gbmV3IE9ic2lkaWFuRXZlbnRTdHJlYW1DbGllbnQoXG5cdFx0XHRncnBjX2NvbmZpZy5hZGRyZXNzLFxuXHRcdFx0Z3JwY19jb25maWcuY3JlZGVudGlhbHNcblx0XHQpO1xuXG5cdFx0dGhpcy5zdHJlYW0gPSB0aGlzLmNsaWVudC5zdHJlYW1FdmVudHMoKGVyciwgdmFsdWUpID0+IHtcblx0XHRcdGlmIChlcnIpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBzZW5kUmVxdWVzdDxOYW1lIGV4dGVuZHMgRXZlbnROYW1lPihcblx0XHRuYW1lOiBOYW1lLFxuXHRcdGV2ZW50OiBFdmVudE5hbWVUb1Byb3RvTWFwW05hbWVdXG5cdCk6IHZvaWQge1xuXHRcdC8vIEdldCB0aW1lc3RhbXBcblx0XHRjb25zdCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuXHRcdC8vIENyZWF0ZSByZXF1ZXN0XG5cdFx0Y29uc3Qgb2JzaWRpYW5FdmVudCA9IG5ldyBPYnNpZGlhbkV2ZW50KHsgdGltZXN0YW1wLCBbbmFtZV06IGV2ZW50IH0pO1xuXHRcdC8vIFNlbmQgcmVxdWVzdFxuXHRcdHRoaXMuc3RyZWFtLndyaXRlKG9ic2lkaWFuRXZlbnQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIG9uQ3JlYXRlKGZpbGU6IFRBYnN0cmFjdEZpbGUpOiB2b2lkIHtcblx0XHRjb25zdCBldmVudCA9IG5ldyBDcmVhdGVFdmVudCh7IGZpbGVQYXRoOiBmaWxlLnBhdGggfSk7XG5cdFx0dGhpcy5zZW5kUmVxdWVzdChcImNyZWF0ZVwiLCBldmVudCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgb25EZWxldGUoZmlsZTogVEFic3RyYWN0RmlsZSk6IHZvaWQge1xuXHRcdGNvbnN0IGV2ZW50ID0gbmV3IERlbGV0ZUV2ZW50KHsgZmlsZVBhdGg6IGZpbGUucGF0aCB9KTtcblx0XHR0aGlzLnNlbmRSZXF1ZXN0KFwiZGVsZXRlXCIsIGV2ZW50KTtcblx0fVxuXG5cdHByb3RlY3RlZCBvblJlbmFtZShmaWxlOiBUQWJzdHJhY3RGaWxlLCBvbGRQYXRoOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRjb25zdCBldmVudCA9IG5ldyBSZW5hbWVFdmVudCh7XG5cdFx0XHRuZXdQYXRoOiBmaWxlLnBhdGgsXG5cdFx0XHRvbGRQYXRoLFxuXHRcdH0pO1xuXHRcdHRoaXMuc2VuZFJlcXVlc3QoXCJyZW5hbWVcIiwgZXZlbnQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIG9uTW9kaWZ5KGZpbGU6IFRBYnN0cmFjdEZpbGUpOiB2b2lkIHtcblx0XHRjb25zdCBldmVudCA9IG5ldyBNb2RpZnlFdmVudCh7IGZpbGVQYXRoOiBmaWxlLnBhdGggfSk7XG5cdFx0dGhpcy5zZW5kUmVxdWVzdChcIm1vZGlmeVwiLCBldmVudCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgb25GaWxlT3BlbihmaWxlOiBUQWJzdHJhY3RGaWxlIHwgbnVsbCk6IHZvaWQge1xuXHRcdC8vIE9ubHkgc2VuZCBldmVudCBpZiBmaWxlIGlzIG5vdCBudWxsXG5cdFx0Ly8gSSBiZWxpZXZlIG51bGwgZmlsZSBtZWFucyBpdCBoYXMgYmVlbiBjbG9zZWQgYnV0IG5vdCBzdXJlLlxuXHRcdGlmIChmaWxlKSB7XG5cdFx0XHRjb25zdCBldmVudCA9IG5ldyBGaWxlT3BlbkV2ZW50KHsgZmlsZVBhdGg6IGZpbGUucGF0aCB9KTtcblx0XHRcdHRoaXMuc2VuZFJlcXVlc3QoXCJmaWxlX29wZW5cIiwgZXZlbnQpO1xuXHRcdH1cblx0fVxufVxuIl19