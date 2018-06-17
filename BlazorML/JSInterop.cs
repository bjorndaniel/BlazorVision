using Microsoft.AspNetCore.Blazor.Browser.Interop;

namespace BlazorML
{
    public class JSInterop
    {
        public static string OnLoaded() =>
            RegisteredFunction.Invoke<string>("BlazorML.JSInterop.OnLoaded");
    }
}
