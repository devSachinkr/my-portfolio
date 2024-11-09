import {
  Tooltip as ShadcnTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Tooltip = ({
  tooltipContent,
  tooltipTrigger,
  showContent=true,
}: {
  tooltipContent: React.ReactNode | string;
  tooltipTrigger: React.ReactNode;
  showContent?: boolean;
}) => {
  return (
    <TooltipProvider delayDuration={0}>
      <ShadcnTooltip>
        <TooltipTrigger asChild>{tooltipTrigger}</TooltipTrigger>
        {showContent && (
          <TooltipContent className="bg-accent">
            {tooltipContent}
          </TooltipContent>
        )}
      </ShadcnTooltip>
    </TooltipProvider>
  );
};
