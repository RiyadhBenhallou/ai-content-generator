import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationControl({
  currentPage,
  hasNextPage,
}: {
  currentPage: number;
  hasNextPage: boolean;
}) {
  return (
    <Pagination className="mt-4">
      <PaginationContent>
        {currentPage !== 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={`/dashboard/history?page=${currentPage - 1}`}
            />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink href="#">{currentPage}</PaginationLink>
        </PaginationItem>
        {hasNextPage && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href={`/dashboard/history?page=${currentPage + 1}`}
              />
            </PaginationItem>
          </>
        )}
      </PaginationContent>
    </Pagination>
  );
}
