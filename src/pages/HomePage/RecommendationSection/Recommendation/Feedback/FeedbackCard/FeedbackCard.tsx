import "./FeedbackCard.scss";
interface IFeedBackCardProps {
  src?: string;
  alt?: string;
  title: string;
  summary: string;
}
export const FeedbackCard: React.FC<IFeedBackCardProps> = ({
  src,
  alt,
  title,
  summary,
}) => {
  return (
    <div className="feedback-card">
      <img src={require(`../../../../../../${src}`)} alt={alt} />
      <div className="feedback-card-text">
        <p className="feedback-author">{title}</p>
        <p className="feedback-summary">{summary}</p>
      </div>
    </div>
  );
};
