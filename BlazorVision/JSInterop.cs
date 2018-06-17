using Microsoft.AspNetCore.Blazor.Browser.Interop;

namespace BlazorVision
{
    public class JSInterop
    {
        public static string OnLoaded() =>
            RegisteredFunction.Invoke<string>("BlazorVision.JSInterop.OnLoaded");
    }
}
