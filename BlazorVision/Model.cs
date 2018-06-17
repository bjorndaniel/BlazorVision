using System;

namespace BlazorVision
{
    public class Predictions
    {
        public string id { get; set; }
        public string project { get; set; }
        public string iteration { get; set; }
        public DateTime created { get; set; }
        public Prediction[] predictions { get; set; }
    }

    public class Prediction
    {
        public float probability { get; set; }
        public string tagId { get; set; }
        public string tagName { get; set; }
        public double Percent => Math.Round(probability * 100, 2);
        public string Result =>
            probability > 0.75 ? 
                $"I'm {Percent}% sure that this image is {(tagName.Equals("Airplane") ? "an" : "a")} {tagName}" :
                "I'm not sure what this is but probably not a plane, train or automobile...";
    }
    public enum ImageState
    {
        NA,
        Loading,
        Analyzing,
        Done,
        Failure
    }
}
