import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

export const metadata = {
  title: 'Full Monograph | Sprouse Family 250th Celebration',
  description: 'The complete historical and genealogical monograph.',
};

export default function MonographPage() {
  const filePath = path.join(process.cwd(), 'sprouse_family_250_celebration.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary py-20 md:py-32">
      <div className="container mx-auto px-6">
        <Link href="/" className="inline-flex items-center text-text-light hover:text-black mb-12 transition-colors font-medium">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Timeline
        </Link>
        
        <article className="prose prose-lg md:prose-xl max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-2xl shadow-xl border border-gray-200">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({node, ...props}) => <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-8" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-3xl font-serif font-bold mt-16 mb-6 pb-2 border-b-2 border-gray-200" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-2xl font-serif font-bold mt-12 mb-4 text-gray-800" {...props} />,
              h4: ({node, ...props}) => <h4 className="text-xl font-bold mt-8 mb-4 text-gray-700" {...props} />,
              p: ({node, ...props}) => <p className="mb-6 leading-relaxed text-gray-700" {...props} />,
              blockquote: ({node, ...props}) => (
                <blockquote className="border-l-4 border-black pl-6 py-2 my-8 bg-gray-50 italic text-gray-700 rounded-r-lg" {...props} />
              ),
              ul: ({node, ...props}) => <ul className="list-disc pl-8 mb-6 space-y-2 text-gray-700" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal pl-8 mb-6 space-y-2 text-gray-700" {...props} />,
              li: ({node, ...props}) => <li className="pl-2" {...props} />,
              table: ({node, ...props}) => (
                <div className="overflow-x-auto my-8">
                  <table className="min-w-full divide-y divide-gray-300 border border-gray-300 rounded-lg" {...props} />
                </div>
              ),
              th: ({node, ...props}) => <th className="px-6 py-4 bg-gray-100 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider" {...props} />,
              td: ({node, ...props}) => <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-t border-gray-200" {...props} />,
              pre: ({node, ...props}) => <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto my-8 shadow-inner" {...props} />,
              code: ({node, inline, ...props}: any) => 
                inline 
                  ? <code className="bg-gray-100 text-pink-600 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
                  : <code className="font-mono text-sm" {...props} />,
              a: ({node, ...props}) => <a className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-4" {...props} />
            }}
          >
            {fileContent}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
