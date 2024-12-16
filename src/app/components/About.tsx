import Image from "next/image";
import { FaLightbulb, FaRocket, FaHandshake } from "react-icons/fa";

interface FeatureCardProps {
  Icon: React.ElementType; // React component type for the icon
  title: string; // Title of the feature
  description: string; // Description of the feature
  bgColor: string; // Background color class for the icon container
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  Icon,
  title,
  description,
  bgColor,
}) => (
  <div className="flex items-center gap-4">
    <div
      className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center`}
    >
      <Icon className="text-2xl text-purple-900" />
    </div>
    <div>
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default function About() {
  const features: FeatureCardProps[] = [
    {
      Icon: FaLightbulb,
      title: "Problem Solver",
      description: "Transforming complex challenges into elegant solutions",
      bgColor: "bg-purple-100",
    },
    {
      Icon: FaRocket,
      title: "Fast Learner",
      description: "Always staying current with emerging technologies",
      bgColor: "bg-blue-100",
    },
    {
      Icon: FaHandshake,
      title: "Team Player",
      description: "Collaborative approach to project development",
      bgColor: "bg-green-100",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Heading Section */}
          <div className="text-center mb-16">
            <span className="text-purple-600 font-medium">About Me</span>
            <h2 className="text-4xl font-bold mt-2 mb-4 text-gray-800">
              Passionate about creating impactful solutions
            </h2>
            <div className="h-1 w-20 bg-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-purple-900/100 rounded-2xl transform rotate-6"></div>
              <Image
                src="/1000224919.png"
                alt="John Doe"
                width={600}
                height={500}
                className="relative z-10 rounded-2xl object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 2 years of experience in front-end web development, I
                excel at crafting responsive and scalable web applications that
                address real-world challenges. Leveraging my technical expertise
                and a keen eye for user experience design, I create responsive,
                seamless and engaging interfaces that prioritize functionality
                and aesthetics.
              </p>

              {/* Features */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    Icon={feature.Icon}
                    title={feature.title}
                    description={feature.description}
                    bgColor={feature.bgColor}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
