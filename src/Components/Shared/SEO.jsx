import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords }) => {
     const siteName = "B4 Style"; 

     return (
          <Helmet>
               <title>{title} | {siteName}</title>
               {description && (
                    <meta name="description" content={description} />
               )}
               {keywords && (
                    <meta name="keywords" content={keywords} />
               )}
               {/* Open Graph for social media */}
               <meta property="og:title" content={`${title} | ${siteName}`} />
               {description && (
                    <meta property="og:description" content={description} />
               )}
          </Helmet>
     );
};

export default SEO;