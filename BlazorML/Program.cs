using Blazored.Storage;
using Microsoft.AspNetCore.Blazor.Browser.Rendering;
using Microsoft.AspNetCore.Blazor.Browser.Services;

namespace BlazorML
{
    public class Program
    {
        static void Main(string[] args)
        {
            var serviceProvider = new BrowserServiceProvider(services =>
            {
                services.AddLocalStorage();
            });

            new BrowserRenderer(serviceProvider).AddComponent<App>("app");
        }
    }
}
