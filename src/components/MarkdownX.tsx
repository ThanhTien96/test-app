import remarkBreaks from 'remark-breaks';
import ReactMarkdown from 'react-markdown';
type TMarkdownXProps = {
  content?: string;
  className?: string;
}


const MarkdownComponent = ({content, className}: TMarkdownXProps) => {
  return (
    <ReactMarkdown className={className} remarkPlugins={[remarkBreaks]}>
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownComponent;